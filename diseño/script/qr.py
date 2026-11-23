import qrcode

qr = qrcode.QRCode(
    version=1,
    box_size=10,
    border=4,
)

surtido = 'https://richardocampo.github.io/Panazteca/dise%C3%B1o/?producto=Surtido'

qr.add_data(surtido)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("qr_codes/qr_code_surtido.png")
