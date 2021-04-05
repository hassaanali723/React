from PIL import Image

img = Image.open('bg.jpg')

nimg = img.resize((1366, 657))

nimg.save('bg2.jpg')

print(nimg.size)
