# TODO better way to remove all BUT one file
mv data/10mb_0.mp4 .
rm -rf data/*
mv 10mb_0.mp4 data/
mv 10mb_0.flv data/
mv 10mb_0.3gp data/
mv 10mb_0.mkv data/
# TODO better way to create secuencial files
cd data
cp 10mb_0.mp4 10mb_1.mp4
cp 10mb_0.mp4 10mb_2.mp4
cp 10mb_0.mp4 10mb_3.mp4
cp 10mb_0.flv 10mb_1.flv
cp 10mb_0.flv 10mb_2.flv
cp 10mb_0.flv 10mb_3.flv
cp 10mb_0.3gp 10mb_1.3gp
cp 10mb_0.3gp 10mb_2.3gp
cp 10mb_0.3gp 10mb_3.3gp
cp 10mb_0.mkv 10mb_1.mkv
cp 10mb_0.mkv 10mb_2.mkv
cp 10mb_0.mkv 10mb_3.mkv
cd -