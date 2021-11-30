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



