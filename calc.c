#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

void main(int argc, char* argv[]){
    int hsum, pasum, gsum;
    double HperPA, PAperG, Pct;
    int boom = 0;
    int combo = 0;
    bool hit = false;

    int TRY = 1000000;  // TRY = 1M
    int LIMIT = 50;     // COMBO TO SUCCESS
    int GAME = 144;     // TOTAL GAMES
    int YEAR = 2016;

    if( argc == 2 && *argv[1] == '6' ){
        /* PA >= 250 */
        hsum = 1138;
        pasum = 3686;
        gsum = 860;
    }
    else if( argc == 2 && *argv[1] == '4' ){
        /* 2014, PA>=400 */
        hsum = 1580;
        pasum = 5155;
        gsum = 1199;
        LIMIT = 40;
        GAME = 128;
        YEAR = 2014;
    }
    else if( argc == 2 && *argv[1] == '5' ){
        /* 2015, PA>=400 */
        hsum = 1640;
        pasum = 5472;
        gsum = 1296;
        YEAR = 2015;
    }
    else{
        /* PA >= 300 */
        hsum = 1177;
        pasum = 3838;
        gsum = 894;
        TRY = 10000000;
    }

    HperPA = (double) hsum / (double) pasum;
    PAperG = (double) pasum / (double) gsum;

    Pct = 1 - pow( (1 - HperPA), PAperG );
    
    int i, j = 0;
    srand(time(NULL));
    for( i = 0; i < TRY; i++ ){
        combo = 0;
        for( j = 0; j < GAME; j++ ){
            if( rand()%100 <= Pct*100 ){
                hit = true;
                combo++;
            }
            else{
                hit = false;
                combo = 0;
            }

            if( j >= GAME - LIMIT && hit == false )
                break;
            if( combo >= LIMIT )
                break;
        }
        if( combo >= LIMIT )
            boom++;
    }
    printf("YEAR : %d\n", YEAR);
    printf("COMBO : %d\n", LIMIT);
    printf("GAMES : %d\n", GAME);
    printf("HperPA : %.3f\n", HperPA);
    printf("PAperG : %.2f\n", PAperG);
    printf("pct : %.1f%%\n", Pct*100);
    printf("try : %d\n", TRY);
    printf("boom : %d\n", boom);
}
