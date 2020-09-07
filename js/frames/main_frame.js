var html_main_frame = `<div class = "panel-group" id = "accordion">
                        <div class = "panel panel-primary">
                            <div class = "panel-heading">
                                <h4 class = "panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Σχήμα</a>
                                </h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse">
                                <div class="panel-body">
                                   <form>
                                        <div class = "form_group">
                                            <label class = "control-label col-4">Σχήμα: </label>
                                            <div class = "col-8">
                                                <select class = "form-control" id = "shape_selection" onchange = "changeShapeSelection()">
                                                     <option value = "tr">Τρίγωνο</option>
                                                     <option value = "sq">Τετράγωνο</option>
                                                     <option value = "rec">Ορθογώνιο</option>
                                                     <option value = "cir">Κύκλος</option>
                                                     <option value = "polyg">Πολύγωνο</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class = "form_group">
                                            <label class = "control-label col-4">Πάχος: </label>
                                            <div class = "col-8">
                                                <select class = "form-control" id = "width_selection" onchange = "changeLineWidthSelection()">
                                                     <option>Μικρό</option>
                                                     <option>Μεσαίο</option>
                                                     <option>Μεγάλο</option>
                                                     <option>Τεράστιο</option>
                                                </select>
                                            </div>
                                        </div>
                                   </form>
                                </div>
                                <div class="panel-footer" id = "shape_form"></div>
                            </div>
                            
                        </div>
                        <div class = "panel panel-primary">
                            <div class = "panel-heading">
                                <h4 class = "panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" disable = "true" href="#collapse2">Μετασχηματισμός</a>
                                </h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <form>
                                        <div class = "form_group">
                                            <label class = "control-label col-4">Μετασχηματισμός: </label>
                                            <div class = "col-8">
                                                <select class = "form-control" id = "transformation_selection" onchange = "changeTransformationSelection()">
                                                    <option value = "transport">Μεταφορά</option>
                                                    <option value = "rotate">Περιστροφή</option>
                                                    <option value = "scale">Αλλαγή Κλίμακας</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="panel-footer" id = "transform_form"></div>
                            </div>
                        </div>
                   </div>`
                 