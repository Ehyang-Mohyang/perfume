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
    const [mainSaveAlert, setMainSaveAlert] = useState(false);
    const [subSaveAlert, setSubSaveAlert] = useState(false);
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
    const handleSaveClick = async (id: number, event: React.MouseEvent<HTMLDivElement>, from: string) => {
        console.log('click id: ', id);
        event.stopPropagation();
        try {
            await saveMyPerfume(id);
            await savedCheck(ids);
        } catch (error) {
            console.error("Error saving perfume:", error);
        } finally {
            if (from === 'sub') {
                setSubSaveAlert(()=> true);
                setTimeout(() => {
                    setSubSaveAlert(false);
                }, 1000);
            }
            if (from === 'main') {
                setMainSaveAlert(()=> true);
                setTimeout(() => {
                    setMainSaveAlert(false);
                }, 1000);
            }
        }
    };
    useEffect(() => {
        setSaveClick(() => handleSaveClick);
    }, [setSaveClick]);

    return {
        mainSaveAlert,
        subSaveAlert,
        perfumesSaved,
        saveClick: handleSaveClick,
        savedCheck,
    };
};