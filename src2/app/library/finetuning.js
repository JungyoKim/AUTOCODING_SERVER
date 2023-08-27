export const finetuning = async(input) => {

const requestoptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET
    },
    body: `source=ko&target=en&text=${encodeURIComponent(input)}`
  };

let result = undefined;

await fetch(process.env.NAVER_API_URL, requestoptions)
    .then(response => response.json())
    .then(data => result = data.message.result.translatedText)
    .catch(error => console.error('Error:', error));
    return `This model looks at the condition of the problem and writes an appropriate programing language script, Models need to figure out the language through examples.
    input: problem description
    The most basic command in the Python language is the output statement.
    Print the next word using print( ).

    Hello

    reference
    If you write and run the source code as below,
    The specified "sentence" is printed.
    print("Sentence")

    ** Caution: If you copy and paste from this screen, it may not work properly, so you must write and insert the source code yourself.

    input
    no input

    Print
    Hello

    input example

    output example
    Hello
    output: print("Hello")
    input: problem description
    This problem is designed for quick basic learning of python, and is described based on submitting python code.
    ------

    Information teacher calls strange attendance before class starts.

    In order to quickly learn the faces and names of students, numbers are called randomly (randomly).
    Youngil remembered the numbers the teacher called and wanted to try calling them backwards.

    When the attendance number is randomly called n times, let's print the called number backwards.

    example
    ...
    for i in range(n-1, -1, -1) :
    print(a[i], end=' ')
    ...

    reference
    The order in which the numbers are called is recorded in order in the list, and then the recorded values are printed in reverse order.
    range(start, end, increment) #Includes the start number, does not include the end number. [start, end)
    range(n-1, -1, -1) #n-1, n-2, ..., 3, 2, 1, 0

    input
    The number of times the number was called (n, 1 ~ 10000) is entered in the first line.
    n random numbers (k, 1 to 23) are entered sequentially on the second line with a space between them.

    Print
    Change the order of the number that called attendance and print it out with a space.

    input example
    10
    10 4 2 3 6 6 7 9 8 5

    output example
    5 8 9 7 6 6 3 2 4 10
    output: n = int(input())
    numbers = list(map(int, input().split()))

    for i in range(n-1, -1, -1):
        print(numbers[i], end=' ')
    input: problem description
    This problem is designed for quick basic learning of python, and is described based on submitting python code.
    ------

    I am trying to create different color lights by mixing red, green, and blue light.

    When the number of red (r), green (g), and blue (b) lights is given,
    Let's calculate all combinations (r g b) and the number of colors that can be created by mixing the given rgb lights.

    **In displays such as monitors and smartphones, the r, g, and b colors can be combined to create the color of each pixel.
    **A pixel is named from the cells that make up a picture.

    input
    Red and green waves (r, g, b) The number of each light is entered with a blank.
    For example, 3 3 3 means that there are 3 colors from 0 to 2 respectively for red, green and blue light.
    0 <= r,g,b <= 127
    
    Print
    The information of rgb colors that can be created in ascending order (in ascending order, 12345... abcde..., kanadarama...)
    Change the line to print all of them, and print the number at the end.
    
    input example
    2 2 2

    output example
    0 0 0
    0 0 1
    0 1 0
    0 1 1
    1 0 0
    1 0 1
    1 1 0
    1 1 1
    8
    output: r, g, b = map(int, input().split())
    count = 0

    for i in range(r):
        for j in range(g):
            for k in range(b):
                print(i, j, k)
                count += 1

    print(count)
    input: ${result}
    output:`;
}