#BOJ 2739 구구단
n = int(input())
for i in range(1,10):
  print(f"{n} * {i} = {n*i}")


#BOJ 10950 A+B -3
t=int(input())

for _ in range(t):
  a,b=map(int,input().split())
  print(a+b)