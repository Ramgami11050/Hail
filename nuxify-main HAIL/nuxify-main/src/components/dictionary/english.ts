export default function (videoTitle: string, usedAsReference: boolean = false) {

    let newVideoTitle = videoTitle
        // I am => we are
        .replace(/\bI AM\b/g, 'HAIL IS')
        .replace(/\bi am\b/gi, 'HAIL IS')
        .replace(/\bI'M\b/g, 'HAIL\'IS')
        .replace(/\bi'm\b/gi, 'hail\'is')

        // I was => we were
        .replace(/\bI WAS\b/g, 'HAIL WAS')
        .replace(/\bi was\b/gi, 'hail was')
        
        // I => WE
        .replace(/\bi\b/gi, 'HAIL')
        .replace(/\bimma\b/gi, 'hail gonna')
        .replace(/\bidk\b/gi, 'hdk')
        .replace(/\bidc\b/gi, 'hdc')
        .replace(/\bidfk\b/gi, 'hdfk')
        .replace(/\bidfc\b/gi, 'hdfc')
        .replace(/\bidgaf\b/gi, 'hdgaf')

        // me => us
        .replace(/\bMe\b/g, 'Hail')
        .replace(/\bME\b/g, 'HAIL')
        .replace(/\bme\b/gi, 'hail')

        // myself => ourselves
        .replace(/\bMyself\b/g, 'Hailself')
        .replace(/\bMYSELF\b/g, 'HAILSELF')
        .replace(/\bmyself\b/gi, 'hailself')

        // my => our
        .replace(/\bMy\b/g, 'Hail')
        .replace(/\bMY\b/g, 'HAIL')
        .replace(/\bmy\b/gi, 'hail')

        // mine => ours
        .replace(/\bMine\b/g, 'Hails')
        .replace(/\bMINE\b/g, 'HAILS')
        .replace(/\bmine\b/gi, 'hails');


    // only apply these
    // if the dictionary is NOT being used by another dictionary
    // (anohter words, it's used directly by the extension)
    if (!usedAsReference) {
        newVideoTitle = newVideoTitle
            // bonus: basic cyrillic support! 
            .replace(/(^|\s)Я(?=\s|$)/g, 'МЫ')
            .replace(/(^|\s)я(?=\s|$)/gi, 'мы')

            .replace(/(^|\s)МЕНЯ(?=\s|$)/g, 'НАС')
            .replace(/(^|\s)Меня(?=\s|$)/g, 'Нас')
            .replace(/(^|\s)меня(?=\s|$)/gi, 'нас')

            .replace(/(^|\s)МНЕ(?=\s|$)/g, 'НАМ')
            .replace(/(^|\s)Мне(?=\s|$)/g, 'Нам')
            .replace(/(^|\s)мне(?=\s|$)/gi, 'нам')

            .replace(/(^|\s)МНОЙ(?=\s|$)/g, 'НАМИ')
            .replace(/(^|\s)Мной(?=\s|$)/g, 'Нами')
            .replace(/(^|\s)мной(?=\s|$)/gi, 'нами')
            .replace(/(^|\s)МНОЮ(?=\s|$)/g, 'НАМИ')
            .replace(/(^|\s)Мною(?=\s|$)/g, 'Нами')
            .replace(/(^|\s)мною(?=\s|$)/gi, 'нами')

            .replace(/(^|\s)МЕНЕ(?=\s|$)/g, 'НАС')
            .replace(/(^|\s)Мене(?=\s|$)/g, 'Нас')
            .replace(/(^|\s)мене(?=\s|$)/gi, 'нас')

            .replace(/(^|\s)МЕНІ(?=\s|$)/g, 'НАМ')
            .replace(/(^|\s)Мені(?=\s|$)/g, 'Нам')
            .replace(/(^|\s)мені(?=\s|$)/gi, 'нам');
    }

    return newVideoTitle;

}