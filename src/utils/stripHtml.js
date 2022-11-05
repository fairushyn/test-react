function stripHtml(str) {
    return str.replace(/(<([^>]+)>)/gi, "").replace(/&nbsp;/g, '').replace(/&amp;/g, '');
}

export default stripHtml