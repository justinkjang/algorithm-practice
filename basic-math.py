#BOJ 10757 큰수 a+b
a,b=map(int,input().split())
print(a+b)

#BOJ 2292 벌집
n = int(input())
num = 1
i = 1 

while n > num:
  num += 6 * i
  i+=1

print(i)


#BOJ 1712 손익분기점
a,b,c = map(int,input().split())

if b>=c:
  print(-1)
else:
  print(a//(c-b)+1)


#BOJ 1193 분수찾기
input_cnt=int(input())
max_cnt=1
line = 1

while input_cnt > max_cnt:
  line += 1
  max_cnt += line

steps = max_cnt - input_cnt

if line % 2 == 0:
  i = line - steps
  j = 1 + steps
else:
  i = 1 + steps
  j = line - steps

print(f"{i}/{j}")

#BOJ 2869 PUZ
import math
a,b,v = map(int,input().split())

day = math.ceil((v-a)/(a-b))+1

print(day)


#BOJ 10250 ACM Hotel
t = int(input())

for _ in range(t):
  h, w, n = map(int,input().split())
  floor = n % h
  room = n // h + 1
  
  if n % h == 0:
    floor = h
    room = n // h
     
  print(floor*100+room)