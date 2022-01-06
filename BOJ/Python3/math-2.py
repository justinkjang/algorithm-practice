#BOJ 1978 finding prime number

n = int(input())
num_list=list(map(int,input().split()))

prime = 0

for num in num_list:
  error = 0
  if num > 1:
    for i in range(2, num):
      if num % i == 0:
        error += 1
    if error == 0:
      prime += 1

print(prime)


#BOJ 2581 finding prime number-2

m = int(input())
n = int(input())

prime_list = []

for num in range(m, n+1):
  error = 0
  if num > 1:
    for i in range(2, num):
      if num % i == 0:
        error += 1
        break
    if error == 0:
      prime_list.append(num)

if not prime_list:
  print(-1)
else:
  print(sum(prime_list), min(prime_list), sep="\n")


#BOJ 11653 factorization in prime factors

n = int(input())
x = 2

while n != 1:
  if n % x == 0:
    n = n // x
    print(x)
  else:
    x += 1



#BOJ 1929 finding prime numbers ***super hard

m, n = map(int, input().split())

def isprime(m, n):
  n += 1
  prime = [True] * n

  for i in range(2, int(n**0.5)+1):
    if prime[i]:
      for j in range(i+i, n, i):
        prime[j] = False
  for i in range(m,n):
    if i > 1 and prime[i] == True:
      print(i)

isprime(m, n)



#BOJ 4948 Chebyshev's Theorem

max_num = 123456 * 2 + 1

prime = [True] * max_num

for i in range(2, int(max_num**0.5)+1):
  if prime[i]:
    for j in range(i + i, max_num, i):
      prime[j] = False

while True:
  n = int(input())
  if n == 0:
    break
  
  count = 0
  for i in range(n + 1, 2 * n + 1):
    if prime[i]:
      count += 1
  print(count)


#BOJ 9020 Goldbach’s Conjecture

#Prime
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


#BOJ 1085 직사각형에서 탈출

x,y,w,h = map(int,input().split())

print(min(x, y, w-x, h-y))


#BOJ 3009 CETVRTA

x_list = []
y_list = []

for _ in range(3):
  x, y = map(int, input().split())
  x_list.append(x)
  y_list.append(y)

for i in range(3):
  if x_list.count(x_list[i]) == 1:
    a = x_list[i]
  if y_list.count(y_list[i]) == 1:
    b = y_list[i]
  
print(a, b)


#BOJ 4153 Egypt

while True:
  nums = list(map(int,input().split()))
  if sum(nums) == 0:
    break
  
  max_num = max(nums)
  nums.remove(max_num)

  if max_num ** 2 == nums[0]**2 + nums[1]**2:
    print('right')
  else:
    print('wrong')


#BOJ 3053 HERMAN

import math

r = int(input())
# 소수점 6자리
print(f'{r**2*math.pi: .6f}')
print(f'{r**2*2: .6f}')


#BOJ 1002 터렛

import math

t = int(input())

for _ in range(t):
  x1, y1, r1, x2, y2, r2 = map(int, input().split())

  d = math.sqrt((x1-x2)**2 + (y1-y2)**2)

  # 중심 같은경우
  if d == 0:
    if r1 == r2:
      print(-1)
    else:
      print(0)

  #중심 같은경우
  else:
    if r1 + r2 == d or abs(r1 - r2) == d: #abs = 절대값
      print(1)
    elif abs(r1-r2) < d and r1+r2 > d:
      print(2)
    else:
      print(0)