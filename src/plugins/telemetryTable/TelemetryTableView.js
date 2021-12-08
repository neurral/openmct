import TelemetryTable from './components/TelemetryTable.vue';
import TelemetryTableState from './TelemetryTable';
import Vue from 'vue';

export default class TelemetryTableView {
    constructor(openmct, domainObject, objectPath) {
        this.openmct = openmct;
        this.domainObject = domainObject;
        this.objectPath = objectPath;
        this.component = undefined;

        this.table = new TelemetryTableState(domainObject, openmct);
    }

    getViewContext() {
        if (!this.component) {
            return {};
        }

        return this.component.$refs.tableComponent.getViewContext();
    }

    onEditModeChange(editMode) {
        this.component.isEditing = editMode;
    }

    onClearData() {
        this.table.clearData();
    }

    getTable() {
        return this.table;
    }

    destroy(element) {
        this.component.$destroy();
        this.component = undefined;
    }

    show(element, editMode) {
        this.component = new Vue({
            el: element,
            components: {
                TelemetryTable
            },
            provide: {
                openmct: this.openmct,
                objectPath: this.objectPath,
                table: this.table,
                currentView: this
            },
            data() {
                return {
                    isEditing: editMode,
                    marking: {
                        disableMultiSelect: false,
                        enable: true,
                        rowName: '',
                        rowNamePlural: '',
                        useAlternateControlBar: false
                    }
                };
            },
            template: /*html*/`
                <telemetry-table ref="tableComponent" :is-editing="isEditing" :marking="marking"></telemetry-table>
            `
        });
    }
}
