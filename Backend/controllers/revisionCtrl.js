
var revisarAgendaDeAmbiente = require("./agendaDeAmbienteCtrl").revisar;
var revisarCartaDeCertificacion = require("./cartaDeCertificacionCtrl").revisar;
var revisarDefects = require("./defectsCtrl").revisar;
var revisarDoDDdTVSTS = require("./doDDdTVSTSCtrl").revisar;
var revisarReleases = require("./releasesCtrl").revisar;
var revisarRepositorio = require("./repositorioCtrl").revisar;
var revisarRequirements = require("./requirementsCtrl").revisar;
var revisarTestLab = require("./testLabCtrl").revisar;
var revisarUsd = require("./usdCtrl").revisar;

module.exports = {
    revisarAgendaDeAmbiente,
    revisarCartaDeCertificacion,
    revisarDefects,
    revisarDoDDdTVSTS,
    revisarReleases,
    revisarRepositorio,
    revisarRequirements,
    revisarTestLab,
    revisarUsd
}