#BOJ 10952 A+B -5
while True:
  a,b = map(int,input().split())
  if a == 0 and b == 0:
    break
  
  print(a+b)

#BOJ 10951 A+B -4
while True:
  try:
    a,b = map(int,input().split())
  except:
    break 
  print(a+b)


#BOJ 1110 더하기 사이클
initial_num = int(input())
num=initial_num
count=0

while True:
  a = num//10 + num%10
  num = num%10*10 + a%10
  count += 1

  if num == initial_num:
    break

print(count)