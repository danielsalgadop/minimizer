# TODO cleaner way to remove all BUT one file
mv data/10mb_0.mp4 .
rm -rf data/*
mv 10mb_0.mp4 data/
# TODO cleaner way to create secuencial files
cd data
cp 10mb_0.mp4 10mb_1.mp4
cp 10mb_0.mp4 10mb_2.mp4
cp 10mb_0.mp4 10mb_3.mp4
cd -