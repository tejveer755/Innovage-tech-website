function FAQItem({
    questionId,
    question,
    answer,
    answersVisible,
    handleToggleAnswer,
}) {
    return (
        <div className="w-[90%]  border-b-[1px] border-neutral-50 p-4">
            <div className="flex items-center justify-start py-4 mb-3 w-[100%]">
                <h3 className="text-2xl font-bold text-white hover:underline cursor-pointer">{question}</h3>
                <button
                    className={` my-auto text-white font-bold  ml-auto rounded ${answersVisible[questionId] ? 'bg-blueish' : ''
                        }`}
                    onClick={() => handleToggleAnswer(questionId)}
                >
                    {answersVisible[questionId] ? 'Hide ' : 'Show '}
                </button>
            </div>

            <div
                className={`answer transition-all mt-3 ease-in ${answersVisible[questionId] ? '' : 'hidden'}`}
            >
                <p className="text-lg text-white">{answer}</p>
            </div>
        </div>
    );
}

export default FAQItem;
