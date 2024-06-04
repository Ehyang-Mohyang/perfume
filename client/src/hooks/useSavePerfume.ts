import {useState} from 'react';
import {getSavedCheck} from '../api/getSavedCheck';
import {saveMyPerfume} from '../api/saveMyPerfume';
import {useRecoilState} from 'recoil';
import {saveClickState} from '../recoil/recoilState';
import {perfumesSavedType} from '../pages/result';

export const useSavePerfume = (ids: number[]) => {
    const [saveClick, setSaveClick] = useRecoilState(saveClickState);
    const [saveAlert, setSaveAlert] = useState(false);
    const [perfumesSaved, setPerfumesSaved] = useState<[perfumesSavedType]>();

    const savedCheck = async (ids: number[]) => {
        try {
            const isSaved = await getSavedCheck(ids);
            setPerfumesSaved(isSaved);
            console.log('result page perfumesSaved: ', perfumesSaved);
        } catch (error) {
            console.error("Error fetching saved check:", error);
        }
    };
    const handleSaveClick = async (id: number, event: React.MouseEvent<HTMLDivElement>) => {
        console.log('click id: ', id);
        event.stopPropagation(); // 이벤트 전파 중단
        try {
            await saveMyPerfume(id);
            await savedCheck(ids);
            setSaveAlert(true);
            setTimeout(() => {
                setSaveAlert(false);
            }, 2000);
        } catch (error) {
            console.error("Error saving perfume:", error);
        }
    };

    return {
        saveAlert,
        perfumesSaved,
        saveClick: handleSaveClick,
        savedCheck,
    };
};