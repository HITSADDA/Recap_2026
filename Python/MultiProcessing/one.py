import multiprocessing

async def download(url, i):
    # Somthing is downloading, i is how many times to download
    pass


if __name__ == '__main__':

    url = "dsakjfalkdsjf kljdsaf"

    props = []

    p = multiprocessing.Process(target=download, args=[url])
    p.start()

    props.append(p)

    for p in props:
        p.join