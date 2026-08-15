Vue.component("settings-tab", {
    data() {
        return {
            Theme
        };
    },
    methods: {
        switchTheme() {
            newTheme = this.settings.theme + 1;
            if (newTheme >= Theme.themes.length) {
                newTheme = 0;
            }
            this.$emit("set-settings", "theme", newTheme);
            Theme.applyTheme(newTheme);
        },
        downloadAll() {
            this.$emit("download-all");
        }
    },
    props: {
        settings: Object
    },
    template: `
    <div class="tab settings-tab">
        <tab-header title="Settings"/>

        <div class="settings-btn-con">
            <button @click="switchTheme">
                Theme: {{Theme.getTheme(settings.theme)}}
            </button>

            <button @click="downloadAll">
                Download All Saves
            </button>
        </div>
        <b>This is 2048 Power Compendium Custom Mode Database.</b><br>
        The reason of the existence is primarily because MathCookie's custom mode example is a literal mess, with hundred of modes being placed without any ordering, 
        and sometimes it being outdated, therefore there is the Database which contain every single modes (including horrible modes) ever created and posted in MathCookie's discord server (as long as there is no duplicate to existing official modes), 
        with modes being up-to-date whenever possible, which is also easier to use because you can just press 'Copy to Clipboard' in mobile device rather than hold the Save Code in Examples, and is being categorized into 
        8 different categories which depends on the sequence of the tiles/numbers, merge rules, and so on, plus two extra categories for how the mode is created.
        <br><br>
        <b>Removed Custom Modes, and how to play these modes now:</b><br>
         - 1024 (3125 variant): Available with Official Mode, can be found in Alternate 5040, select 3125 variant, change the "Tiles progress through" modifier to power of, enter 4 in the box.<br>
         - Alternaet 5040 (3125 variant): Available with Official Mode, can be found in Alternate 5040 and select 3125 variant, keep the "Tiles progress through" modifier to Factorial.<br>
         - 5040 but XXXX / Hellish 5040 / 5040 (Long merge practice): Available with Official Mode, can be found in Alternate 5040 and select XXXX variant, keep the "Tiles progress through" modifier to Factorial.<br>
         - Harder 2197: Can be recreated with Mode Modifier of Alternate 5040, select 3375 variant, change the "Tiles progress through" modifier to power of, enter 13 in the box, then change how the smaller power added to "Smaller powers are added all at once", and change Base to 3.<br>
         - 2520: Available with Official Mode, can be found in Alternate 5040, select 2520 variant, change the "Tiles progress through" modifier to power of, enter 2520 in the box, and change the grid size to 4x4 for better recreation, do note that you can play beyond 2520 in this mode.<br>
         If you really want to end at 2520, after select 2520 variant, change the "Tiles progress through" modifier to cycle of different bases, enter 2520 in the first box and 7 in the second box, change the Merge modifier to "Merges occur between various multiples of a number", and change the grid size to 4x4.<br>
        <br>
         - FIVE: Available with Official Mode, just unleash the wave (which can be found in DIVE), and you will see FIVE, in the place of 2700. You will also have modifiers which have more options to play.<br>
         - Bicolor 2048 / Bicolor 4096: Available with Global Modifier, go to "Settings and Modifiers", switch to Modifier, go to page 4, and you will see "Multicolor Tiles", change this value to 2.<br>
         - 3969: Can be played with Infused Mode named 3087, created by MathCookie, which have the same merge rule with more modifiers.<br>
    </div>
    `
});

/*
Planned to remove:
None yet
*/