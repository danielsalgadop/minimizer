prueba de flujo
# minimizer

will minimize video size using ffmpeg.

## dependencies

ffmpeg
php (for php/)
node (for node/)
shell

## working exammple

minimizing by 4

```
cd data
ffmpeg -i 10mb_0.mp4 -vf "scale=iw/4:ih/4" 10mb_0_minimizer.mp4
```

## sample-data

https://sample-videos.com/

video-extensions copied from

https://github.com/sindresorhus/video-extensions/blob/main/video-extensions.json
