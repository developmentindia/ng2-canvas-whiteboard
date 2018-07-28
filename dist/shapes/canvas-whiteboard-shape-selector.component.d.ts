import { ElementRef } from "@angular/core";
import { CanvasWhiteboardShapeService, INewCanvasWhiteboardShape } from "./canvas-whiteboard-shape.service";
import { CanvasWhiteboardShape } from "./canvas-whiteboard-shape";
import { Observable } from "rxjs/Observable";
import { CanvasWhiteboardShapeOptions } from "./canvas-whiteboard-shape-options";
export declare class CanvasWhiteboardShapeSelectorComponent {
    private _elementRef;
    private _canvasWhiteboardShapeService;
    readonly showShapeSelector: boolean;
    readonly selectedShapeConstructor: INewCanvasWhiteboardShape<CanvasWhiteboardShape>;
    readonly shapeOptions: CanvasWhiteboardShapeOptions;
    onToggleShapeSelector: any;
    onShapeSelected: any;
    registeredShapes$: Observable<INewCanvasWhiteboardShape<CanvasWhiteboardShape>[]>;
    constructor(_elementRef: ElementRef, _canvasWhiteboardShapeService: CanvasWhiteboardShapeService);
    selectShape(shape: INewCanvasWhiteboardShape<CanvasWhiteboardShape>): void;
    closeOnExternalClick(event: any): void;
    toggleShapeSelector(event: Event): void;
}