import { NextResponse } from "next/server";
import { TextServiceClient } from '@google-ai/generativelanguage';
import { GoogleAuth } from 'google-auth-library';
import { finetuning } from "@/app/library/finetuning.js"
import { problemscraper } from "@/app/library/problemscraper.js";

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.GOOGLE_API_KEY;
const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

async function codegenerator(promptstring){
    return client.generateText({
    model: MODEL_NAME,
    temperature: 0.7,
    candidateCount: 1,
    top_k: 40,
    top_p: 0.95,
    max_output_tokens: 1024,
    safety_settings:
    [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},
     {"category":"HARM_CATEGORY_TOXICITY","threshold":1},
     {"category":"HARM_CATEGORY_VIOLENCE","threshold":2},
     {"category":"HARM_CATEGORY_SEXUAL","threshold":2},
     {"category":"HARM_CATEGORY_MEDICAL","threshold":2},
     {"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
    prompt: {
        text: promptstring,
    },
    }).then(result => {
      return result[0].candidates[0].output;
    });
}

export async function GET(request, { params }) {
  const id = params.get;
  if (id >= 1000 && id <= 9999) {
    try {
      const result1 = await problemscraper(id);
      const result2 = await finetuning(result1);
      if(result2 === "error"){
        return new NextResponse(JSON.stringify({id:id,code:"error"},null,2));
      }
      else{
        const code = await codegenerator(result2);
        return new NextResponse(JSON.stringify({id:id,code:code},null,2));
      }
    } catch (error) {
      console.error(error);
      return new NextResponse(JSON.stringify({id:id,code:"error"},null,2));
    }
  } else {
    return new NextResponse(JSON.stringify({id:id,code:"error"},null,2));
  }
}