export function getCookie(name) {
    let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +'=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export function deleteCookie(name) {
    if (getCookie(name)) {
        console.log(name);
        document.cookie = name + '=; Max-Age=-1; path=/magazine';
    }
};
