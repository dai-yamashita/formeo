import i18n from 'mi18n'
import dom from '../common/dom'
import EditPanelItem from './edit-panel-item';

/**
 * Element/Field class.
 */
export default class EditPanel {
  /**
   * Set defaults and load panelData
   * @param  {Object} panelData existing field ID
   * @param  {string} panelName name of panel
   * @return {Object} field object
   */
  constructor(panelData, panelName) {
    console.log(panelData, panelName)
    // this.id = panelsData.add(panelData)
    this.type = dom.contentType(panelData)
    this.panelData = panelData
    this.name = panelName
    const domConfig = {
      tag: 'div',
      attrs: {
        className: `f-panel ${panelName}-panel`,
      },
      config: {
        label: i18n.get(`panelLabels.${panelName}`),
      },
      content: [this.editPanelContent],
      action: {
        // change: evt => {
        // let fieldData = formData.fields.get(_this.id);
        //   if (evt.target.fMap) {
        //     let value = evt.target.value;
        //     let targetType = evt.target.type;
        //     if (targetType === 'checkbox' || targetType === 'radio') {
        //       let options = fieldData.options;
        //       value = evt.target.checked;
        //       // uncheck options if radio
        //       if (evt.target.type === 'radio') {
        //         options.forEach(option => option.selected = false);
        //       }
        //     }
        //     h.set(fieldData, evt.target.fMap, value);
        //     data.save(panelType, _this.id);
        //     // throttle this for sure
        //     _this.updatePreview();
        //   }
        // }
      },
    }
    this.dom = dom.create(domConfig)
  }

  /**
   * Generates the edit panel for attrs, meta and options for a fields(s)
   * @param  {String} panelName
   * @param  {Object} dataObj   field config object
   * @return {Object}           formeo DOM config object
   */
  get editPanelContent() {
    const panel = {
      tag: 'ul',
      attrs: {
        className: ['field-edit-group', 'field-edit-' + this.panelName],
      },
      editGroup: this.panelName,
      isSortable: this.panelName === 'options',
      content: Array.from(this.panelItemData).map(itemData => new EditPanelItem(itemData)),
    }
    return panel
  }
}
