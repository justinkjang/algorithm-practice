n,k=map(int, input().split())

result=0

while True:
  target = (n // k) *k
  result += (n-target)