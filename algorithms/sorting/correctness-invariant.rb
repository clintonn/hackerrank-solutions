def insertionSort(ar)
    i = 1
    while (i < ar.length)
        if (i > 0 && ar[i] < ar[i - 1])
            value = ar[i]
            j = i-1
          while (j >= 0 && value < ar[j]) 
            swap = ar[j]
            ar[j] = ar[j+1]
            ar[j+1] = swap
                j -= 1
            end 
        end
        i += 1
    end
    puts ar.join(" ")
end

# Tail starts here
cnt = gets.to_i;
ar = STDIN.gets.chomp.split(" ").map {|a| a.to_i};
insertionSort(ar);

