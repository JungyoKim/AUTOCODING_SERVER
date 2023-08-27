import * as cheerio from 'cheerio';

const url = process.env.SITE_URL

export const problemscraper = async(id) => {
    try {
        const response = await fetch(url + id);
        const data = await response.text();
        const $ = cheerio.load(data);
        
        const problemDescription = $('#pro1').text();
        const input = $('#pro2').text();
        const output = $('#pro3').text();
        const inputExample = $('#sinput').text().trim();
        const outputExample = $('.card-body:last-child .sampledata').text().trim();
        const text = $("div[role=alert] h2").text();

        const result = `
        문제설명
        ${problemDescription}

        입력
        ${input}

        출력
        ${output}

        입력예시
        ${inputExample}

        출력예시
        ${outputExample}
        `
        if(text === "해당 문제를 열람할 수 없습니다!!"){
            return "error"
        }
        else{
        return result
        }
        }catch(error) {
        return "error"
        }
};