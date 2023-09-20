import React from 'react';
import { useIonToast } from '@ionic/react';

export function toast(message: string, duration = 2000) {
    const [present] = useIonToast();
    present({
        message: message,
        duration: duration
    });
}