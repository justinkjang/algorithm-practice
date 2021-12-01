#BOJ 9020 Goldbach’s Conjecture

#Prime Numbers
max = 10000 + 1
prime = [True] * max

for i in range(2, int(max**0.5)+1):
  if prime[i]:
    for j in range(i * 2, max, i):
      prime[j] = False

#Goldbach
t = int(input())
for _ in range(t):
  n = int(input())
  mid_num = n//2
  for i in range(mid_num, 1, -1):
    if prime[i] and prime[n - i]:
      print(i, n-i)
      break