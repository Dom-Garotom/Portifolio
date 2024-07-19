import ButtonCTA from "../ButtonCTA";

function SectionContact() {
    return (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-7 bg-gray-900 border-t-2 border-gray-800 p-4 md:p-0">
            <h1 className="text-2xl md:text-4xl font-semibold text-emerald-500 text-center max-w-lg md:max-w-2xl">
                Vamos começar a construir o futuro que você imagina!
            </h1>
            <ButtonCTA content="Vamos conversar" caminho="/contact" />
        </div>
    );
}

export default SectionContact;
