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