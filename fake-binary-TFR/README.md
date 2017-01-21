# fake-binary-TFR
You just met a new robot, Mr.Robo Cat! 

![alt text](https://s-media-cache-ak0.pinimg.com/236x/0a/cb/6e/0acb6e78b88b9488227c5905215c574f.jpg)

He's super awesome and super cool but there's one problem...

He talks in binary, so you need to translate the things the says!

## Your mission
Given a string that is a mix of words and numbers, create a function called **roboTranslator** that takes in a parameter *word* 
 - Replace anything in the string that is not a number with '1'
 - Replace numbers that are divisible by 2 with '1'
 - Everything else is a replaced with the number '0'

Return the newly replaced string.

## Hint!
You will need to loop a for use loops!

## Check
 - roboTranslator("Hello"), must return "11111"
 - roboTranslator("10112H"), must return "000011"
 - roboTranslator("What 213812 i0 th0t"), must return "1111 100101 10 1101";


