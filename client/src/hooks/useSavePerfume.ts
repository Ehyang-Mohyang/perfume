import {useEffect, useState} from 'react';
import {getSavedCheck} from '../api/getSavedCheck';
import {saveMyPerfume} from '../api/saveMyPerfume';
import {useRecoilState} from 'recoil';
import {saveClickState} from '../recoil/recoilState';
export interface perfumesSavedType {
    id: number,
    exists: boolean,
}
export const useSavePerfume = (ids: number[]) => {
    const [saveClick, setSaveClick] = useRecoilState(saveClickState);
    const [saveAlert, setSaveAlert] = useState(false);
    const [perfumesSaved, setPerfumesSaved] = useState<perfumesSavedType[]>([]);

    const savedCheck = async (ids: number[]) => {
        try {
            const isSaved = await getSavedCheck(ids);
            setPerfumesSaved(isSaved);
            console.log('result page perfumesSaved: ', isSaved);
        } catch (error) {
            console.error("Error fetching saved check:", error);
        }
    };
    const handleSaveClick = async (id: number, event: React.MouseEvent<HTMLDivElement>) => {
        console.log('click id: ', id);
        event.stopPropagation();
        try {
            await saveMyPerfume(id);
            await savedCheck(ids);
            setSaveAlert(() => true);
            console.log('handleSaveClick saveAlert: ', saveAlert);
            setTimeout(() => {
                setSaveAlert(false);
            }, 1500);
        } catch (error) {
            console.error("Error saving perfume:", error);
        }
    };
    useEffect(() => {
        setSaveClick(() => handleSaveClick);
    }, [setSaveClick]);

    return {
        saveAlert,
        perfumesSaved,
        saveClick: handleSaveClick,
        savedCheck,
    };
};