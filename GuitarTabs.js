var GuitarTabs = (function () {
	var lines = ["|", "|", "|", "|", "|", "|"];

	function addNotes(a1, a2, a3, a4, a5, a6) {
		lines[0] += `-${a1 || a1 === 0 ? a1 : "-"}`;
		lines[1] += `-${a2 || a2 === 0 ? a2 : "-"}`;
		lines[2] += `-${a3 || a3 === 0 ? a3 : "-"}`;
		lines[3] += `-${a4 || a4 === 0 ? a4 : "-"}`;
		lines[4] += `-${a5 || a5 === 0 ? a5 : "-"}`;
		lines[5] += `-${a6 || a6 === 0 ? a6 : "-"}`;
	}

	function addSeparator() {
		for (let i = 0; i < 6; i++) { lines[i] += "-|"; }
	}

	function linesToString() {
		console.log(`${lines[0]}
${lines[1]}
${lines[2]}
${lines[3]}
${lines[4]}
${lines[5]}`);
	}

	function init() {
		for (let i = 0; i < 6; i++) { lines[i] = "|"; }
	}
	
	return {
		init,
		addNotes,
		addSeparator,
		linesToString
	};
})();