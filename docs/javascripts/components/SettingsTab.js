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
        This is 2048 Power Compendium Custom Mode Database. The reason of the existence is primarily because MathCookie's custom mode example is a literal mess, with hundred of modes being placed without any ordering, 
        and sometimes it being outdated (Latest Update: July 15 or 16, 2026), therefore there is the Database which contain every single modes (including horrible modes) ever created and posted in MathCookie's discord server, 
        with modes being up-to-date whenever possible, which is also easier to use because you can just press 'Copy to Clipboard' in mobile device rather than hold the Save Code in Examples, and is being categorised into 
        8 different categories which depends on the sequence of the tiles/numbers, merge rules, and so on, plus two extra categories for how the mode is created.

    </div>
    `
});
