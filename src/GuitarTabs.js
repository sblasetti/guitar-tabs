const GuitarTabs = (function () {
    var lines = [];

	/**
	 * Add notes to play on each string.
	 * @param {number} e1 Note on the e string, negative number to leave it empty
	 * @param {number} b2 Note on the B string, negative number to leave it empty
	 * @param {number} g3 Note on the G string, negative number to leave it empty
	 * @param {number} d4 Note on the D string, negative number to leave it empty
	 * @param {number} a5 Note on the A string, negative number to leave it empty
	 * @param {number} e6 Note on the E string, negative number to leave it empty
	 */
    function addNotes(e1, b2, g3, d4, a5, e6) {
        function getLine(line, chord) {
            return `${line}-${!isNaN(chord) && chord >= 0 ? chord : "-"}`;
        }

        lines[0] = getLine(lines[0], e1);
        lines[1] = getLine(lines[1], b2);
        lines[2] = getLine(lines[2], g3);
        lines[3] = getLine(lines[3], d4);
        lines[4] = getLine(lines[4], a5);
        lines[5] = getLine(lines[5], e6);

        return this;
    }

	/**
	 * Add a separation line.
	 */
    function addSeparator() {
        for (let i = 0; i < 6; i++) { lines[i] += "-|"; }

        return this;
    }

	/**
	 * Get a string representation of the tab.
	 * @returns {string} The tab as string.
	 */
    function getString() {
        const tune = "eBGDAE".split('');

        let str = "";
        for (let i = 0; i < tune.length; i++) {
            str += `${tune[i]}${lines[i]}\n`;
        }

        return str;
    }

	/**
	 * Initialize each string to an empty line.
	 */
    function init() {
        lines = "|".repeat(6).split('');

        return this;
    }

    init();
    return {
        init,
        addNotes,
        addSeparator,
        getString
    };
})();

export default GuitarTabs;
