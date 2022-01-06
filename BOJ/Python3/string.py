#BOJ 11654 ASCII Code
print(ord(input()))

#BOJ 11720 숫자의 합
n = input()
print(sum(map(int,input())))

#BOJ 10809 알파벳 찾기
s=input()
alphabet = list(range(97,123))

for i in alphabet:
  print(s.find(chr(i)), end=' ')

#BOJ 2675 Repeating Characters
p = int(input())

for _ in range(p):
  cnt, word= input().split()

  for i in word:
    print(i*int(cnt), end='')
  print()

#BOJ 1157 단어 공부
word = input().upper()
usedAlphabets = list(set(word))
numCnt = []

for i in usedAlphabets:
  numCnt.append(word.count(i))

if numCnt.count(max(numCnt))>1:
  print("?")
else:
  indexOfMaxAlphabet = numCnt.index(max(numCnt))
  print(usedAlphabets[indexOfMaxAlphabet])


#BOJ 1152 단어의 개수
a = input().split()
print(len(a))

#BOJ 2908 FILIP
a, b = input().split()

a=int(a[::-1])
b=int(b[::-1])

if a > b:
  print(a)
else:
  print(b)


#BOJ 5622 BAKA
alphabet_list= ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

word=input()
sec=0

for unit in alphabet_list:
  for i in unit:
    for x in word:
      if i == x:
        sec+= alphabet_list.index(unit)+3

print(sec)


#BOJ 2941 LJESNJAK
croatia = ['c=', 'c-', 'dz=' , 'd-' , 'lj' , 'nj' , 's=' , 'z=']

word=input()

for i in croatia:
  word = word.replace(i, '*')

print(len(word))

#BOJ 1316 그룹 단어 체커
n = int(input())

groupWord = 0

for _ in range(n):
  word=input()
  error =0
  for indexNum in range(len(word)-1):
    if word[indexNum] != word[indexNum+1]:
      newWord = word[indexNum+1:]
      if newWord.count(word[indexNum]) > 0 :
        error+=1
  if error == 0:
    groupWord +=1
print(groupWord)