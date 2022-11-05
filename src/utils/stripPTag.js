function stripPTag(str) {
    return str.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '<br /><br />');
}

export default stripPTag