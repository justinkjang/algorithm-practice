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