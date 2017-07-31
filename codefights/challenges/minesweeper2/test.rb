require 'byebug'

# load 'solution.rb'
load 'solution.min.rb'

gameboard = [[0, 1, 9, 1],
             [0, 1, 2, 2],
             [0, 0, 1, 9],
             [0, 0, 1, 1]]
opening = [[false, false, false, false],
           [false, false, false, false],
           [false, false, false, false],
           [false, false, false, false]]
moves = [[3, 0]]
expected = [[true, true, false, false],
            [true, true, true, false],
            [true, true, true, false],
            [true, true, true, false]]

result = minesweeper2(gameboard, opening, moves)
print expected == result ? 'ok' : result
puts
