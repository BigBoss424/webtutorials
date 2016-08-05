# This program will do the following
#   1) Take some kind of input from a person
#   2) Change it.
#   3) Print out something to show it changed.

print "How old are you?",
age = raw_input()
print "How tall are you?",
height = raw_input()
print "How much do you weight?",
weight = raw_input()

print "So, you're %r years old, %r tall and %r heavy." % (age, height, weight)
