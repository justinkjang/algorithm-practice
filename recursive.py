#BOJ 10872  팩토리얼

def factorial(n):
  result=1
  if n > 0:
    result = n * factorial(n-1)
  return result

n = int(input())
print(factorial(n))