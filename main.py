#BOJ 1011 Fly me to the Alpha Centry

t=int(input())
for _ in range(t):
  x,y=map(int,input().split())
  n = y - x

  count = 0
  max_D = 0
  G = 1

  while n > max_D:
    count += 1
    max_D += G
    if count % 2 == 0:
      G += 1

  print(count)

