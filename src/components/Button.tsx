type Button = {
    callback: () => void;
    bgColor: string;
    text: string;
    shape: string;
}
export default function Button({ callback, bgColor, shape, text }: Button) {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-full border border-transparent cursor-pointer bg-${bgColor}-800
            text-white p-4 hover:ring-[0.75em] hover:ring-${bgColor}-200 focus:ring-[0.75em] focus:ring-${bgColor}-200 transition-all`}
            type="button"
            onClick={callback}
        >
            <span className={shape} />
            <span>{text}</span>
        </button>
    )
}