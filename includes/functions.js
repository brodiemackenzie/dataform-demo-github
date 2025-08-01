function build_source_schema_from_env() {
return `${dataform.projectConfig.defaultSchema}_${dataform.projectConfig.vars.env}`;
}

module.exports = { build_source_schema_from_env }