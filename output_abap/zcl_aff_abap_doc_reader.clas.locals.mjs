const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_abap_doc_reader.clas.locals_def.abap
// zcl_aff_abap_doc_reader.clas.locals_imp.abap
class lcl_section_source_comments {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_AFF_ABAP_DOC_READER-LCL_SECTION_SOURCE_COMMENTS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"CLSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "DEPTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "HIERARCHY_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_nodes");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"IS_WITHIN_DATA_BEGIN_END_OF": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "TAB_STATEMENTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");}, "is_optional": " "}, "TAB_TOKENS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");}, "is_optional": " "}, "LIMIT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "LIMIT_COL": {"type": () => {return new abap.types.Integer({qualifiedName: "INT2"});}, "is_optional": " "}}},
  "IS_WITHIN_TYPES_BEGIN_END_OF": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "TAB_STATEMENTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");}, "is_optional": " "}, "TAB_TOKENS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");}, "is_optional": " "}, "LIMIT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "LIMIT_COL": {"type": () => {return new abap.types.Integer({qualifiedName: "INT2"});}, "is_optional": " "}}},
  "BUILD_HIERARCHY_NODES": {"visibility": "I", "parameters": {"TAB_STATEMENTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");}, "is_optional": " "}, "TAB_TOKENS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");}, "is_optional": " "}, "NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_nodes");}, "is_optional": " "}}},
  "SCAN_CODE": {"visibility": "U", "parameters": {"SOURCE_TO_BE_SCANNED": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "TAB_STATEMENTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");}, "is_optional": " "}, "TAB_TOKENS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");}, "is_optional": " "}}},
  "IDENTIFY_ABAP_DOC_BLOCKS_ALL": {"visibility": "U", "parameters": {"TAB_ABAP_DOC": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tab_comments": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "column_first_comment": new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), "hook_relevant_tok_type": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_add": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_type_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {})}, "ty_comment_block", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ty_comment_blocks");}, "is_optional": " "}, "TAB_STATEMENTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");}, "is_optional": " "}, "TAB_TOKENS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");}, "is_optional": " "}, "TAB_SOURCE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.clsname = new abap.types.String({qualifiedName: "STRING"});
    this.depth = new abap.types.Integer({qualifiedName: "I"});
    this.hierarchy_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_nodes");
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async is_within_data_begin_end_of(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let tab_statements = INPUT?.tab_statements;
    if (tab_statements?.getQualifiedName === undefined || tab_statements.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_SSTMNT") { tab_statements = undefined; }
    if (tab_statements === undefined) { tab_statements = abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt").set(INPUT.tab_statements); }
    let tab_tokens = INPUT?.tab_tokens;
    if (tab_tokens?.getQualifiedName === undefined || tab_tokens.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_STOKESX") { tab_tokens = undefined; }
    if (tab_tokens === undefined) { tab_tokens = abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx").set(INPUT.tab_tokens); }
    let limit = INPUT?.limit;
    if (limit?.getQualifiedName === undefined || limit.getQualifiedName() !== "I") { limit = undefined; }
    if (limit === undefined) { limit = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.limit); }
    let limit_col = new abap.types.Integer({qualifiedName: "INT2"});
    if (INPUT && INPUT.limit_col) {limit_col.set(INPUT.limit_col);}
    let fs_fs_tok_prev_prev_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_prev_prev2_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_prev_prev1_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_stmnt_tmp_ = new abap.types.FieldSymbol(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}));
    let counter_begin_of = new abap.types.Integer({qualifiedName: "I"});
    let counter_end_of = new abap.types.Integer({qualifiedName: "I"});
    result.set(abap.builtin.abap_false);
    abap.statements.clear(this.me.get().depth);
    if (abap.compare.gt(limit_col, abap.IntegerFactory.get(0))) {
      for await (const unique23 of abap.statements.loop(tab_statements,{where: async (I) => {return (abap.compare.ne(I.type, new abap.types.Character(1).set('P')) && abap.compare.ne(I.type, new abap.types.Character(1).set('S')) && abap.compare.ne(I.type, new abap.types.Character(1).set('G'))) && abap.compare.le(I.from, limit);}})) {
        fs_fs_stmnt_tmp_.assign(unique23);
        abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_tmp_.get().from,
          assigning: fs_fs_tok_prev_prev_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(1)),
          assigning: fs_fs_tok_prev_prev1_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(2)),
          assigning: fs_fs_tok_prev_prev2_});
        if (((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(9).set('CONSTANTS'))) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(5).set('BEGIN')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_begin_of.set(abap.operators.add(counter_begin_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.add(this.me.get().depth,abap.IntegerFactory.get(1)));
        } else if (((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(9).set('CONSTANTS'))) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(3).set('END')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_end_of.set(abap.operators.add(counter_end_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.minus(this.me.get().depth,abap.IntegerFactory.get(1)));
        }
      }
    } else {
      for await (const unique24 of abap.statements.loop(tab_statements,{where: async (I) => {return (abap.compare.ne(I.type, new abap.types.Character(1).set('P')) && abap.compare.ne(I.type, new abap.types.Character(1).set('S')) && abap.compare.ne(I.type, new abap.types.Character(1).set('G'))) && abap.compare.lt(I.from, limit);}})) {
        fs_fs_stmnt_tmp_.assign(unique24);
        abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_tmp_.get().from,
          assigning: fs_fs_tok_prev_prev_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(1)),
          assigning: fs_fs_tok_prev_prev1_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(2)),
          assigning: fs_fs_tok_prev_prev2_});
        if (((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(9).set('CONSTANTS'))) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(5).set('BEGIN')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_begin_of.set(abap.operators.add(counter_begin_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.add(this.me.get().depth,abap.IntegerFactory.get(1)));
        } else if (((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(9).set('CONSTANTS'))) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(3).set('END')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_end_of.set(abap.operators.add(counter_end_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.minus(this.me.get().depth,abap.IntegerFactory.get(1)));
        }
      }
    }
    if (abap.compare.gt(counter_begin_of, counter_end_of)) {
      result.set(abap.builtin.abap_true);
    }
    return result;
  }
  async is_within_types_begin_end_of(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let tab_statements = INPUT?.tab_statements;
    if (tab_statements?.getQualifiedName === undefined || tab_statements.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_SSTMNT") { tab_statements = undefined; }
    if (tab_statements === undefined) { tab_statements = abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt").set(INPUT.tab_statements); }
    let tab_tokens = INPUT?.tab_tokens;
    if (tab_tokens?.getQualifiedName === undefined || tab_tokens.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_STOKESX") { tab_tokens = undefined; }
    if (tab_tokens === undefined) { tab_tokens = abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx").set(INPUT.tab_tokens); }
    let limit = INPUT?.limit;
    if (limit?.getQualifiedName === undefined || limit.getQualifiedName() !== "I") { limit = undefined; }
    if (limit === undefined) { limit = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.limit); }
    let limit_col = new abap.types.Integer({qualifiedName: "INT2"});
    if (INPUT && INPUT.limit_col) {limit_col.set(INPUT.limit_col);}
    let fs_fs_tok_prev_prev_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_prev_prev2_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_prev_prev1_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_stmnt_tmp_ = new abap.types.FieldSymbol(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}));
    let counter_begin_of = new abap.types.Integer({qualifiedName: "I"});
    let counter_end_of = new abap.types.Integer({qualifiedName: "I"});
    result.set(abap.builtin.abap_false);
    abap.statements.clear(this.me.get().depth);
    if (abap.compare.gt(limit_col, abap.IntegerFactory.get(0))) {
      for await (const unique25 of abap.statements.loop(tab_statements,{where: async (I) => {return (abap.compare.ne(I.type, new abap.types.Character(1).set('P')) && abap.compare.ne(I.type, new abap.types.Character(1).set('S')) && abap.compare.ne(I.type, new abap.types.Character(1).set('G'))) && abap.compare.le(I.from, limit);}})) {
        fs_fs_stmnt_tmp_.assign(unique25);
        abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_tmp_.get().from,
          assigning: fs_fs_tok_prev_prev_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(1)),
          assigning: fs_fs_tok_prev_prev1_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(2)),
          assigning: fs_fs_tok_prev_prev2_});
        if ((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(5).set('TYPES')) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(5).set('BEGIN')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_begin_of.set(abap.operators.add(counter_begin_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.add(this.me.get().depth,abap.IntegerFactory.get(1)));
        } else if ((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(5).set('TYPES')) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(3).set('END')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_end_of.set(abap.operators.add(counter_end_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.minus(this.me.get().depth,abap.IntegerFactory.get(1)));
        }
      }
    } else {
      for await (const unique26 of abap.statements.loop(tab_statements,{where: async (I) => {return (abap.compare.ne(I.type, new abap.types.Character(1).set('P')) && abap.compare.ne(I.type, new abap.types.Character(1).set('S')) && abap.compare.ne(I.type, new abap.types.Character(1).set('G'))) && abap.compare.lt(I.from, limit);}})) {
        fs_fs_stmnt_tmp_.assign(unique26);
        abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_tmp_.get().from,
          assigning: fs_fs_tok_prev_prev_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(1)),
          assigning: fs_fs_tok_prev_prev1_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_tmp_.get().from,abap.IntegerFactory.get(2)),
          assigning: fs_fs_tok_prev_prev2_});
        if ((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(5).set('TYPES')) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(5).set('BEGIN')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_begin_of.set(abap.operators.add(counter_begin_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.add(this.me.get().depth,abap.IntegerFactory.get(1)));
        } else if ((abap.compare.eq(fs_fs_tok_prev_prev_.get().str, new abap.types.Character(5).set('TYPES')) && abap.compare.eq(fs_fs_tok_prev_prev1_.get().str, new abap.types.Character(3).set('END')) && abap.compare.eq(fs_fs_tok_prev_prev2_.get().str, new abap.types.Character(2).set('OF')))) {
          counter_end_of.set(abap.operators.add(counter_end_of,abap.IntegerFactory.get(1)));
          this.me.get().depth.set(abap.operators.minus(this.me.get().depth,abap.IntegerFactory.get(1)));
        }
      }
    }
    if (abap.compare.gt(counter_begin_of, counter_end_of)) {
      result.set(abap.builtin.abap_true);
    }
    return result;
  }
  async scan_code(INPUT) {
    let source_to_be_scanned = INPUT?.source_to_be_scanned;
    if (source_to_be_scanned?.getQualifiedName === undefined || source_to_be_scanned.getQualifiedName() !== "STRING_TABLE") { source_to_be_scanned = undefined; }
    if (source_to_be_scanned === undefined) { source_to_be_scanned = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.source_to_be_scanned); }
    let tab_statements = INPUT?.tab_statements || abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");
    let tab_tokens = INPUT?.tab_tokens || abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");
    if (abap.Classes['KERNEL_SCAN_ABAP_SOURCE'] === undefined) throw new Error("ScanAbapSource, kernel class missing");
    await abap.Classes['KERNEL_SCAN_ABAP_SOURCE'].call({scan_abap_source: source_to_be_scanned, tokens_into: tab_tokens, statements_into: tab_statements, with_analysis: true, with_comments: true, with_pragmas: new abap.types.Character(1).set('*')});
  }
  async identify_abap_doc_blocks_all(INPUT) {
    let tab_abap_doc = abap.types.TableFactory.construct(new abap.types.Structure({"tab_comments": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "column_first_comment": new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), "hook_relevant_tok_type": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_add": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_type_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {})}, "ty_comment_block", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ty_comment_blocks");
    let tab_statements = INPUT?.tab_statements;
    if (tab_statements?.getQualifiedName === undefined || tab_statements.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_SSTMNT") { tab_statements = undefined; }
    if (tab_statements === undefined) { tab_statements = abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt").set(INPUT.tab_statements); }
    let tab_tokens = INPUT?.tab_tokens;
    if (tab_tokens?.getQualifiedName === undefined || tab_tokens.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_STOKESX") { tab_tokens = undefined; }
    if (tab_tokens === undefined) { tab_tokens = abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx").set(INPUT.tab_tokens); }
    let tab_source = INPUT?.tab_source;
    if (tab_source?.getQualifiedName === undefined || tab_source.getQualifiedName() !== "STRING_TABLE") { tab_source = undefined; }
    if (tab_source === undefined) { tab_source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.tab_source); }
    let l_node = new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {});
    let l_node_new = new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {});
    let l_name_node = new abap.types.String({qualifiedName: "STRING"});
    let l_name_concatenated = new abap.types.String({qualifiedName: "STRING"});
    let l_parent = new abap.types.String({qualifiedName: "STRING"});
    let l_line_code = new abap.types.String({qualifiedName: "STRING"});
    let line_comment_block = new abap.types.Structure({"tab_comments": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "column_first_comment": new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), "hook_relevant_tok_type": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_add": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_type_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {})}, "ty_comment_block", undefined, {}, {});
    let tab_comments_to_save = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let current_statement = new abap.types.Integer({qualifiedName: "I"});
    let relevant_token1 = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {});
    let relevant_token2 = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {});
    let relevant_token3 = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {});
    let l_depth = new abap.types.Integer({qualifiedName: "I"});
    let l_length = new abap.types.Integer({qualifiedName: "I"});
    let l_count = new abap.types.Integer({qualifiedName: "I"});
    let l_from = new abap.types.Integer({qualifiedName: "I"});
    let l_to = new abap.types.Integer({qualifiedName: "I"});
    let embeded_types = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    embeded_types.set(abap.builtin.abap_false);
    let embeded_data_const = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    embeded_data_const.set(abap.builtin.abap_false);
    let nodes = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let hierarchy_nodes_descending = abap.types.TableFactory.construct(new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_nodes");
    let fs_fs_stmnt_ = new abap.types.FieldSymbol(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}));
    let fs_fs_stmnt_prev_ = new abap.types.FieldSymbol(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}));
    let fs_fs_stmnt_next_ = new abap.types.FieldSymbol(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}));
    let fs_fs_tok_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_prev_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_prev_plus_1_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let l_line_code_condensed = new abap.types.String({qualifiedName: "STRING"});
    let l_hier = new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {});
    abap.statements.clear(tab_abap_doc);
    await this.me.get().build_hierarchy_nodes({tab_statements: tab_statements, tab_tokens: tab_tokens, nodes: this.me.get().hierarchy_nodes});
    for await (const unique27 of abap.statements.loop(tab_statements,{where: async (I) => {return abap.compare.eq(I.type, new abap.types.Character(1).set('P')) || abap.compare.eq(I.type, new abap.types.Character(1).set('S'));},topEquals: {"type": new abap.types.Character(1).set('S')}})) {
      fs_fs_stmnt_.assign(unique27);
      abap.statements.clear(tab_comments_to_save);
      abap.statements.clear(relevant_token1);
      abap.statements.clear(relevant_token2);
      abap.statements.clear(relevant_token3);
      abap.statements.clear(line_comment_block);
      abap.statements.clear(l_name_concatenated);
      current_statement.set(abap.builtin.sy.get().tabix);
      for await (const unique28 of abap.statements.loop(tab_tokens,{from: fs_fs_stmnt_.get().from,to: fs_fs_stmnt_.get().to})) {
        fs_fs_tok_.assign(unique28);
        abap.statements.readTable(tab_source,{index: fs_fs_tok_.get().row,
          into: l_line_code});
        if (abap.compare.gt(fs_fs_tok_.get().col, abap.IntegerFactory.get(0))) {
          l_length.set(abap.operators.minus(fs_fs_tok_.get().col,abap.IntegerFactory.get(1)));
          if (abap.compare.gt(l_length, abap.IntegerFactory.get(0))) {
            if (!((abap.compare.co(l_line_code.getOffset({length: l_length}), abap.builtin.space)))) {
              continue;
            }
          }
        }
        l_line_code_condensed.set(l_line_code);
        abap.statements.condense(l_line_code_condensed, {nogaps: false});
        if (abap.compare.ge(abap.builtin.strlen({val: l_line_code_condensed}), abap.IntegerFactory.get(2)) && abap.compare.eq(l_line_code_condensed.getOffset({length: 2}), new abap.types.Character(2).set('"!'))) {
          abap.statements.append({source: l_line_code, target: tab_comments_to_save});
        }
      }
      if (!(abap.compare.initial(tab_comments_to_save) === false)) {
        continue;
      }
      embeded_types.set(abap.builtin.abap_false);
      embeded_data_const.set(abap.builtin.abap_false);
      for await (const unique29 of abap.statements.loop(tab_statements,{to: current_statement,where: async (I) => {return (abap.compare.ne(I.type, new abap.types.Character(1).set('P')) && abap.compare.ne(I.type, new abap.types.Character(1).set('S')) && abap.compare.ne(I.type, new abap.types.Character(1).set('G')));}})) {
        fs_fs_stmnt_prev_.assign(unique29);
        continue;
      }
      if (abap.compare.assigned(fs_fs_stmnt_prev_)) {
        abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_prev_.get().from,
          assigning: fs_fs_tok_prev_});
        if (abap.compare.eq(fs_fs_tok_prev_.get().str, new abap.types.Character(7).set('INCLUDE'))) {
          abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_prev_.get().from,abap.IntegerFactory.get(1)),
            assigning: fs_fs_tok_prev_plus_1_});
        }
        if ((abap.compare.eq(fs_fs_tok_prev_.get().str, new abap.types.Character(8).set('ENDCLASS')))) {
          break;
        }
        if (abap.compare.eq(fs_fs_tok_prev_.get().str, new abap.types.Character(5).set('TYPES')) || (abap.compare.eq(fs_fs_tok_prev_.get().str, new abap.types.Character(7).set('INCLUDE')) && abap.compare.assigned(fs_fs_tok_prev_plus_1_) && abap.compare.eq(fs_fs_tok_prev_plus_1_.get().str, new abap.types.Character(4).set('TYPE')))) {
          if (abap.compare.eq((await this.me.get().is_within_types_begin_end_of({tab_statements: tab_statements, tab_tokens: tab_tokens, limit: fs_fs_stmnt_.get().from})), abap.builtin.abap_true)) {
            embeded_types.set(abap.builtin.abap_true);
          }
        }
        if ((abap.compare.eq(fs_fs_tok_prev_.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(fs_fs_tok_prev_.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(fs_fs_tok_prev_.get().str, new abap.types.Character(9).set('CONSTANTS')))) {
          if (abap.compare.eq((await this.me.get().is_within_data_begin_end_of({tab_statements: tab_statements, tab_tokens: tab_tokens, limit: fs_fs_stmnt_.get().from})), abap.builtin.abap_true)) {
            embeded_data_const.set(abap.builtin.abap_true);
          }
        }
      }
      for await (const unique30 of abap.statements.loop(tab_statements,{from: abap.operators.add(current_statement,abap.IntegerFactory.get(1)),where: async (I) => {return (abap.compare.ne(I.type, new abap.types.Character(1).set('P')) && abap.compare.ne(I.type, new abap.types.Character(1).set('S')) && abap.compare.ne(I.type, new abap.types.Character(1).set('G')));}})) {
        fs_fs_stmnt_next_.assign(unique30);
        break;
      }
      if (abap.compare.assigned(fs_fs_stmnt_next_)) {
        for await (const unique31 of abap.statements.loop(tab_tokens,{from: fs_fs_stmnt_next_.get().from,where: async (I) => {return abap.compare.ne(I.type, new abap.types.Character(1).set('C'));}})) {
          fs_fs_tok_.assign(unique31);
          if (abap.compare.initial(relevant_token2) && abap.compare.initial(relevant_token1) === false) {
            relevant_token2.set(fs_fs_tok_);
            if (abap.compare.eq(relevant_token1.get().str, new abap.types.Character(5).set('CLASS'))) {
              abap.statements.readTable(tab_tokens,{index: abap.operators.add(abap.builtin.sy.get().tabix,abap.IntegerFactory.get(1)),
                into: relevant_token3});
              if (abap.compare.eq(relevant_token3.get().str, new abap.types.Character(10).set('DEFINITION')) && abap.compare.ne(relevant_token2.get().str, this.clsname)) {
                relevant_token2.get().str.set(this.clsname);
              }
              abap.statements.clear(relevant_token3);
            }
            if ((abap.compare.eq(relevant_token1.get().str, new abap.types.Character(5).set('TYPES')) && abap.compare.eq(relevant_token2.get().str, new abap.types.Character(5).set('BEGIN'))) || (abap.compare.eq(relevant_token1.get().str, new abap.types.Character(4).set('DATA')) && abap.compare.eq(relevant_token2.get().str, new abap.types.Character(5).set('BEGIN'))) || (abap.compare.eq(relevant_token1.get().str, new abap.types.Character(10).set('CLASS-DATA')) && abap.compare.eq(relevant_token2.get().str, new abap.types.Character(5).set('BEGIN'))) || (abap.compare.eq(relevant_token1.get().str, new abap.types.Character(9).set('CONSTANTS')) && abap.compare.eq(relevant_token2.get().str, new abap.types.Character(5).set('BEGIN')))) {
              abap.statements.readTable(tab_tokens,{index: abap.operators.add(abap.builtin.sy.get().tabix,abap.IntegerFactory.get(2)),
                into: relevant_token3});
              if ((abap.compare.eq(relevant_token1.get().str, new abap.types.Character(5).set('TYPES')) && abap.compare.eq(relevant_token3.get().str, new abap.types.Character(4).set('MESH')) && abap.compare.eq(abap.operators.minus(fs_fs_stmnt_next_.get().to,fs_fs_stmnt_next_.get().from), abap.IntegerFactory.get(4)))) {
                abap.statements.readTable(tab_tokens,{index: abap.operators.add(abap.builtin.sy.get().tabix,abap.IntegerFactory.get(1)),
                  into: relevant_token3});
              } else if ((abap.compare.eq(relevant_token1.get().str, new abap.types.Character(5).set('TYPES')) && abap.compare.eq(relevant_token3.get().str, new abap.types.Character(4).set('ENUM')) && abap.compare.gt(abap.operators.minus(fs_fs_stmnt_next_.get().to,fs_fs_stmnt_next_.get().from), abap.IntegerFactory.get(5)))) {
                abap.statements.readTable(tab_tokens,{index: abap.operators.add(abap.builtin.sy.get().tabix,abap.IntegerFactory.get(1)),
                  into: relevant_token3});
              }
            }
            break;
          }
          if (abap.compare.initial(relevant_token1)) {
            relevant_token1.set(fs_fs_tok_);
          }
        }
        if (abap.compare.initial(relevant_token3.get().str) === false) {
          l_name_node.set(relevant_token3.get().str);
        } else {
          l_name_node.set(relevant_token2.get().str);
        }
        if (abap.compare.eq(relevant_token1.get().str, new abap.types.Character(5).set('TYPES')) || abap.compare.eq(relevant_token1.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(relevant_token1.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(relevant_token1.get().str, new abap.types.Character(9).set('CONSTANTS'))) {
          abap.statements.append({source: l_name_node, target: nodes});
          abap.statements.clear(l_count);
          abap.statements.clear(l_from);
          abap.statements.clear(l_to);
          for await (const unique32 of abap.statements.loop(this.me.get().hierarchy_nodes)) {
            l_hier.set(unique32);
            if (!(abap.compare.eq(l_hier.get().depth, abap.IntegerFactory.get(0)) && abap.compare.gt(l_hier.get().stmnt_from_idx, abap.IntegerFactory.get(0)) && abap.compare.le(l_hier.get().stmnt_from_idx, fs_fs_stmnt_next_.get().from))) {
              continue;
            }
            l_from.set(abap.builtin.sy.get().tabix);
          }
          if (abap.compare.gt(l_from, abap.IntegerFactory.get(0))) {
            for await (const unique33 of abap.statements.loop(this.me.get().hierarchy_nodes,{from: abap.operators.add(l_from,abap.IntegerFactory.get(1)),where: async (I) => {return abap.compare.eq(I.depth, abap.IntegerFactory.get(0));},topEquals: {"depth": abap.IntegerFactory.get(0)}})) {
              l_hier.set(unique33);
              l_to.set(abap.builtin.sy.get().tabix);
              break;
            }
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) || abap.compare.eq(l_to, abap.IntegerFactory.get(0))) {
              l_to.set(abap.builtin.lines({val: this.me.get().hierarchy_nodes}));
            } else if (abap.compare.gt(l_to, l_from)) {
              l_to.set(abap.operators.minus(l_to,abap.IntegerFactory.get(1)));
            }
            for await (const unique34 of abap.statements.loop(this.me.get().hierarchy_nodes,{from: l_from,to: l_to,where: async (I) => {return abap.compare.eq(I.node_name, l_name_node) && abap.compare.eq(I.depth, this.me.get().depth);},topEquals: {"node_name": l_name_node,"depth": this.me.get().depth}})) {
              l_node.set(unique34);
              l_depth.set(l_node.get().depth);
              l_parent.set(l_node.get().parent_node);
              const indexBackup1 = abap.builtin.sy.get().index.get();
              let unique35 = 1;
              while (abap.compare.ne(l_depth, abap.IntegerFactory.get(0))) {
                abap.builtin.sy.get().index.set(unique35++);
                abap.statements.clear(hierarchy_nodes_descending);
                for await (const unique36 of abap.statements.loop(this.me.get().hierarchy_nodes,{from: l_from,to: l_to,where: async (I) => {return abap.compare.eq(I.node_name, l_parent) && abap.compare.lt(I.depth, l_depth);},topEquals: {"node_name": l_parent}})) {
                  l_node_new.set(unique36);
                  abap.statements.append({source: l_node_new, target: hierarchy_nodes_descending});
                }
                abap.statements.sort(hierarchy_nodes_descending,{by: [{component: "depth", descending: true}]});
                for await (const unique37 of abap.statements.loop(hierarchy_nodes_descending,{where: async (I) => {return abap.compare.eq(I.node_name, l_parent) && abap.compare.lt(I.depth, l_depth);},topEquals: {"node_name": l_parent}})) {
                  l_node_new.set(unique37);
                  abap.statements.insertInternal({data: l_node_new.get().node_name, index: abap.IntegerFactory.get(1), table: nodes});
                }
                if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                  break;
                }
                l_depth.set(l_node_new.get().depth);
                l_parent.set(l_node_new.get().parent_node);
              }
              abap.builtin.sy.get().index.set(indexBackup1);
            }
          }
        }
        if (abap.compare.le(abap.builtin.lines({val: nodes}), abap.IntegerFactory.get(1))) {
          abap.statements.clear(l_name_concatenated);
        } else {
          for await (const unique38 of abap.statements.loop(nodes)) {
            l_name_node.set(unique38);
            if (abap.compare.initial(l_name_concatenated)) {
              l_name_concatenated.set(l_name_node);
            } else {
              l_name_concatenated.set(abap.operators.concat(l_name_concatenated,abap.operators.concat(new abap.types.Character(1).set('-'),l_name_node)));
            }
          }
        }
      }
      line_comment_block.get().tab_comments.set(tab_comments_to_save);
      line_comment_block.get().hook_relevant_tok_type.set(relevant_token1);
      line_comment_block.get().hook_relevant_tok_name.set(relevant_token2);
      line_comment_block.get().hook_relevant_tok_name_add.set(relevant_token3);
      if (abap.compare.cs(l_name_concatenated, new abap.types.Character(1).set('-')) && (abap.compare.eq(embeded_types, abap.builtin.abap_true) || abap.compare.eq(embeded_data_const, abap.builtin.abap_true))) {
        if (abap.compare.initial(line_comment_block.get().hook_relevant_tok_name_add) === false) {
          line_comment_block.get().hook_relevant_tok_name_add.get().str.set(l_name_concatenated);
        } else if (abap.compare.initial(line_comment_block.get().hook_relevant_tok_name) === false) {
          line_comment_block.get().hook_relevant_tok_name.get().str.set(l_name_concatenated);
        }
      }
      abap.statements.append({source: line_comment_block, target: tab_abap_doc});
      abap.statements.clear(nodes);
      abap.statements.clear(l_name_concatenated);
    }
    return tab_abap_doc;
  }
  async build_hierarchy_nodes(INPUT) {
    let tab_statements = INPUT?.tab_statements;
    if (tab_statements?.getQualifiedName === undefined || tab_statements.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_SSTMNT") { tab_statements = undefined; }
    if (tab_statements === undefined) { tab_statements = abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt").set(INPUT.tab_statements); }
    let tab_tokens = INPUT?.tab_tokens;
    if (tab_tokens?.getQualifiedName === undefined || tab_tokens.getQualifiedName() !== "LCL_SECTION_SOURCE_COMMENTS=>TY_STOKESX") { tab_tokens = undefined; }
    if (tab_tokens === undefined) { tab_tokens = abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx").set(INPUT.tab_tokens); }
    let nodes = abap.types.TableFactory.construct(new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_nodes");
    if (INPUT && INPUT.nodes) {nodes = INPUT.nodes;}
    let l_count_begin = new abap.types.Integer({qualifiedName: "I"});
    let l_count_end = new abap.types.Integer({qualifiedName: "I"});
    let l_node_root = new abap.types.String({qualifiedName: "STRING"});
    let l_node = new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {});
    let l_depth = new abap.types.Integer({qualifiedName: "I"});
    let parents = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let fs_fs_stmnt_ = new abap.types.FieldSymbol(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}));
    let fs_fs_tok_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_next2_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_next1_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_next3_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let fs_fs_tok_next4_ = new abap.types.FieldSymbol(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}));
    let temp3 = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let temp8 = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {});
    let temp9 = new abap.types.Integer({qualifiedName: "I"});
    let temp10 = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {});
    let temp11 = new abap.types.Integer({qualifiedName: "I"});
    let l_lines = new abap.types.Integer({qualifiedName: "I"});
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    let temp7 = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.clear(nodes);
    for await (const unique39 of abap.statements.loop(tab_statements,{where: async (I) => {return (abap.compare.ne(I.type, new abap.types.Character(1).set('P')) && abap.compare.ne(I.type, new abap.types.Character(1).set('S')) && abap.compare.ne(I.type, new abap.types.Character(1).set('G')));}})) {
      fs_fs_stmnt_.assign(unique39);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_.get().from,
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique40 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique40.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_reader.clas.locals_imp.abap","INTERNAL_LINE": 455};
        throw unique40;
      }
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_.get().from,
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique41 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique41.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_reader.clas.locals_imp.abap","INTERNAL_LINE": 463};
        throw unique41;
      }
      temp9.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_.get().from,
        into: temp8});
      abap.builtin.sy.get().tabix.set(temp9);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique42 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique42.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_reader.clas.locals_imp.abap","INTERNAL_LINE": 471};
        throw unique42;
      }
      temp11.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(tab_tokens,{index: fs_fs_stmnt_.get().from,
        into: temp10});
      abap.builtin.sy.get().tabix.set(temp11);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique43 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique43.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_reader.clas.locals_imp.abap","INTERNAL_LINE": 479};
        throw unique43;
      }
      if (!(abap.compare.eq(temp3.get().str, new abap.types.Character(5).set('TYPES')) || abap.compare.eq(temp1.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(temp8.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(temp10.get().str, new abap.types.Character(9).set('CONSTANTS')))) {
        continue;
      }
      for await (const unique44 of abap.statements.loop(tab_tokens,{from: fs_fs_stmnt_.get().from,to: fs_fs_stmnt_.get().to})) {
        fs_fs_tok_.assign(unique44);
        if (!((abap.compare.eq(fs_fs_tok_.get().str, new abap.types.Character(5).set('TYPES')) || abap.compare.eq(fs_fs_tok_.get().str, new abap.types.Character(4).set('DATA')) || abap.compare.eq(fs_fs_tok_.get().str, new abap.types.Character(10).set('CLASS-DATA')) || abap.compare.eq(fs_fs_tok_.get().str, new abap.types.Character(9).set('CONSTANTS'))))) {
          continue;
        }
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_.get().from,abap.IntegerFactory.get(1)),
          assigning: fs_fs_tok_next1_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_.get().from,abap.IntegerFactory.get(2)),
          assigning: fs_fs_tok_next2_});
        abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_.get().from,abap.IntegerFactory.get(3)),
          assigning: fs_fs_tok_next3_});
        if (abap.compare.assigned(fs_fs_tok_next1_) && abap.compare.assigned(fs_fs_tok_next2_) && abap.compare.assigned(fs_fs_tok_next3_)) {
          if ((abap.compare.eq(fs_fs_tok_next1_.get().str, new abap.types.Character(5).set('BEGIN')) && abap.compare.eq(fs_fs_tok_next2_.get().str, new abap.types.Character(2).set('OF')))) {
            l_node.get().node_name.set(fs_fs_tok_next3_.get().str);
            l_node.get().stmnt_from_idx.set(fs_fs_stmnt_.get().from);
            l_node.get().stmnt_to_idx.set(fs_fs_stmnt_.get().to);
            if (abap.compare.eq(fs_fs_tok_.get().str, new abap.types.Character(5).set('TYPES')) && (abap.compare.eq(l_node.get().node_name, new abap.types.Character(4).set('MESH')) || abap.compare.eq(l_node.get().node_name, new abap.types.Character(4).set('ENUM')))) {
              abap.statements.readTable(tab_tokens,{index: abap.operators.add(fs_fs_stmnt_.get().from,abap.IntegerFactory.get(4)),
                assigning: fs_fs_tok_next4_});
              l_node.get().node_name.set(fs_fs_tok_next4_.get().str);
            }
            if (abap.compare.eq(l_depth, abap.IntegerFactory.get(0))) {
              l_node_root.set(fs_fs_tok_next3_.get().str);
              l_node.get().depth.set(abap.IntegerFactory.get(0));
              abap.statements.append({source: l_node, target: nodes});
              l_node.get().parent_node.set(l_node_root);
            } else {
              l_node.get().depth.set(l_depth);
              abap.statements.append({source: l_node, target: nodes});
            }
            abap.statements.append({source: l_node.get().node_name, target: parents});
            l_node.get().parent_node.set(l_node.get().node_name);
            l_depth.set(abap.operators.add(l_depth,abap.IntegerFactory.get(1)));
            l_count_begin.set(abap.operators.add(l_count_begin,abap.IntegerFactory.get(1)));
          } else if ((abap.compare.eq(fs_fs_tok_next1_.get().str, new abap.types.Character(3).set('END')) && abap.compare.eq(fs_fs_tok_next2_.get().str, new abap.types.Character(2).set('OF')))) {
            l_depth.set(abap.operators.minus(l_depth,abap.IntegerFactory.get(1)));
            l_count_end.set(abap.operators.add(l_count_end,abap.IntegerFactory.get(1)));
            if (abap.compare.eq(l_depth, abap.IntegerFactory.get(0))) {
              abap.statements.clear(l_count_begin);
              abap.statements.clear(l_count_end);
              abap.statements.clear(l_node);
              abap.statements.clear(l_node_root);
              abap.statements.clear(parents);
              continue;
            }
            l_lines.set(abap.builtin.lines({val: parents}));
            await abap.statements.deleteInternal(parents,{index: l_lines});
            temp6.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(parents,{index: l_depth,
              into: temp5});
            abap.builtin.sy.get().tabix.set(temp6);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique45 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique45.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_reader.clas.locals_imp.abap","INTERNAL_LINE": 539};
              throw unique45;
            }
            l_node.get().parent_node.set(temp5);
          } else {
            l_node.get().stmnt_from_idx.set(fs_fs_stmnt_.get().from);
            l_node.get().stmnt_to_idx.set(fs_fs_stmnt_.get().to);
            l_node.get().node_name.set(fs_fs_tok_next1_.get().str);
            l_node.get().depth.set(l_depth);
            abap.statements.readTable(nodes,{withKey: (i) => {return abap.compare.eq(i.table_line, l_node);},
              withKeyValue: [{key: (i) => {return i.table_line}, value: l_node}],
              usesTableLine: true,
              withKeySimple: {"table_line": l_node}});
            temp7.set(abap.builtin.sy.get().subrc);
            if (!abap.compare.eq(temp7, abap.IntegerFactory.get(0))) {
              abap.statements.append({source: l_node, target: nodes});
            }
          }
        }
      }
    }
  }
}
abap.Classes['CLAS-ZCL_AFF_ABAP_DOC_READER-LCL_SECTION_SOURCE_COMMENTS'] = lcl_section_source_comments;
lcl_section_source_comments.ty_stokesx = abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");
lcl_section_source_comments.ty_sstmnt = abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");
lcl_section_source_comments.ty_node = new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {});
lcl_section_source_comments.ty_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"depth": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-DEPTH"}), "node_name": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-NODE_NAME"}), "parent_node": new abap.types.String({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-PARENT_NODE"}), "stmnt_from_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_FROM_IDX"}), "stmnt_to_idx": new abap.types.Integer({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS=>TY_NODE-STMNT_TO_IDX"})}, "lcl_section_source_comments=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_nodes");
export {lcl_section_source_comments};
//# sourceMappingURL=zcl_aff_abap_doc_reader.clas.locals.mjs.map