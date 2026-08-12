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
        This is 2048 Power Compendium Custom Mode Database.<br>
        The reason of the existence is primarily because MathCookie's custom mode example is a literal mess, with hundred of modes being placed without any ordering, 
        and sometimes it being outdated, therefore there is the Database which contain every single modes (including horrible modes) ever created and posted in MathCookie's discord server (as long as there is no duplicate to existing official modes), 
        with modes being up-to-date whenever possible, which is also easier to use because you can just press 'Copy to Clipboard' in mobile device rather than hold the Save Code in Examples, and is being categorized into 
        8 different categories which depends on the sequence of the tiles/numbers, merge rules, and so on, plus two extra categories for how the mode is created.
        <br><br>
        Removed Custom Modes, and how to play these modes now:<br>
         - FIVE: Available with Official Mode, just unleash the wave (which can be found in DIVE), and you will see FIVE, in the place of 2700. You will also have modifiers which have more options to play.<br>
         - 2520: Available with Official Mode, can be found in Alternate 5040, select 2520 variant, change the "Tiles progress through" modifier to power of, and enter 2520 in the box, do note that you can play beyond 2520 in this mode. (The other modifier is optional)<br>
    </div>
    `
});

/*
Planned to remove:
- Both versions of Bicolor 2048/Bicolor 4096: Available with Modifier, go to "Settings and Modifiers", switch to Modifier, go to page 4, and you will see "Multicolor Tiles", change this value to 2.
- TB148's Harder 2048: Duplicate of Michael's Harder 2048, and latter have proper colour scheme.
- Michael's Annihilation 2048: Just a harder variant of Hyper's Annihilation 512, and latter appear to custom mode example. Though I will list both as mode creator.
- Both versions of 1024 (3125 variant): Can be recreated with Mode Modifier of Alternate 5040, select 3125 variant, change the "Tiles progress through" modifier to power of, and enter 4 in the box.
- Harder 2197: Can be recreated with Mode Modifier of Alternate 5040, select 3375 variant, change the "Tiles progress through" modifier to power of, and enter 13 in the box, then change how the smaller power added to "Smaller powers are added all at once", and change Base to 3.
- marouane's Harder 4096: Duplicate of Michael's Harder 4096, and latter have better colour scheme.
- 5040 but XXXX/5040 (Long merge practice): Can be recreated with Mode Modifier of Alternate 5040 by selecting XXXX variant.
- Alternate 5040 (3125 variant): Can be recreated with Mode Modifier of Alternate 5040 by selecting 3125 variant.
- marouane's NaN (Power of 1): Duplicate of Michael's 1 (Power of 1), and latter have proper rule text.
- Michael's Power of phi: Duplicate of Aren's Power of phi, and latter have colour scheme that's easier to disinguish, both will get credited though.

- 143: Identical to Official Mode 2583, apart from spawning tiles.
- Odd-Only 1597: Two modes will be merged into one, using Aren's colour scheme with F1e308's rule text, and both will be credited for.
- Michael's 1728 (Fibonacci): Same reason as Michael's Power of phi.

- TB148's 1807: Duplicate of Michael's 1807, and latter have a colour scheme that's helpful to see which ratio of tile should merge.
- 3385: Two modes will be merged into one, using TB148's colour scheme with F1e308's rule text, and both will be credited for.

- error_606's 1821-1824: Identical to Michael's 1821-1824, board size can be freedomly changed so grid size make no difference.

- 3969: Merge rule is identical to Infused mode 3087 when 13 and 17 both are disabled.
- Both marouane's Another 3888: Less polished version of Aren's Another 3888, the latter will be remake so it can handle larger number with proper colour scheme.
*/