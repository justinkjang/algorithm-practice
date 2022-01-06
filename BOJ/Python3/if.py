#BOJ 1330 두 수 비교하기
a,b=map(int,input().split())

if a > b:
  print('>')
elif a<b:
  print('<')
else:
  print('==')

#BOJ 2753 윤년
a = int(input())

if a%4 == 0 and a%100 != 0 or a%400 == 0:
  print(1)
else:
  print(0)
  

#BOJ 2884 SPAVANAC
h, m = map(int,input().split())

if m < 45:
  if h == 0:
    h = 23
    m += 60
  else:
    h -= 1
    m += 60

print(h, m-45)