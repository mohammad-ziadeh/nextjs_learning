import Image from 'next/image';

export default function welcome() {
    return (
        <div>
            <div>welcome</div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                <Image
                    src="https://picsum.photos/200/300"
                    alt="Picture of the author"
                    placeholder="blur"
                    blurDataURL="data:..."
                    width={500}
                    height={200}
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    )
}
