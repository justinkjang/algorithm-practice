#BOJ 10870 피보나치 수 5

def f(n):
  if n <= 1:
    return n
  else:
    return f(n-1)+f(n-2)

n = int(input())
print(f(n))