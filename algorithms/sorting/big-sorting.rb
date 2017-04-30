#!/bin/ruby
# used ruby for its native Integer class
n = gets.strip.to_i
unsorted = Array.new(n)
for unsorted_i in (0..n-1)
    unsorted[unsorted_i] = gets.strip
end
e
puts unsorted.sort { |x, y| x.to_i <=> y.to_i }
