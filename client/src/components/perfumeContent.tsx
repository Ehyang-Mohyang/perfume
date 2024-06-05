import polygon from '../assets/icons/polygon.png';
const PerfumeContent = () => {
    return (
        <div className='absolute z-50 ml-[241px]'>
            <div className='flex items-center'>
                <img src={polygon}/>
                <div className='flex items-center rounded-[10px] bg-chatGPT py-[22px] px-[43px] min-w-[520px] max-w-[520px] min-h-[126px]'>
                    달콤 씁쓸하고 살짝 무게감 있는 오렌지 향에
                    약간의 산도 높은 자몽 향이 섞인 매력적인 향수예요!
                </div>
            </div>
        </div>
    );
};

export default PerfumeContent;