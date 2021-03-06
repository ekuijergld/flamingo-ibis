/*
 * Copyright (C) 2015 B3Partners B.V.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Custom configuration object for HTML configuration.
 * @author markprins@b3partners.nl
 */
Ext.define("viewer.components.CustomConfiguration", {
    extend: "viewer.components.SelectionWindowConfig",
    constructor: function (parentId, configObject) {
        if (configObject === null) {
            configObject = {};
        }
        configObject.showLabelconfig = true;
        viewer.components.CustomConfiguration.superclass.constructor.call(this, parentId, configObject);

        this.createCheckBoxes(this.configObject.layers, {
            editable: true
        });
        this.addFormItems(configObject);
    },
    addFormItems: function () {
        var me = this;
        this.form.add([
            {
                xtype: "combo",
                fields: ['value', 'text'],
                value: me.configObject.strategy ? me.configObject.strategy : "add",
                name: "strategy",
                fieldLabel: "Splits strategie (add)",
                emptyText: 'Maak uw keuze (add)',
                store: [
                    // in ibis altijd add
                    // ["replace", "replace"],
                    ["add", "add"]
                ],
                labelWidth: me.labelWidth
            } , {
                xtype: 'combobox',
                fieldLabel: 'Nieuwe Workflow status (Definitief)',
                labelWidth: this.labelWidth,
                emptyText: 'Maak uw keuze (definitief)',
                store: 'IbisWorkflowStore',
                queryMode: 'local',
                name: 'workflowstatus',
                itemId: 'workflowstatus',
                displayField: 'label',
                valueField: 'id',
                value: me.configObject.workflowstatus ? me.configObject.workflowstatus : "definitief"
            }
        ]);
    }
});
